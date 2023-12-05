import QuillEditor, { Delta, DeltaOperation } from 'quill';
import Quill from 'react-quill';
import { useEffect, useRef } from 'react';

import 'react-quill/dist/quill.snow.css';
import styles from '../style/EditorPosts.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type IProps = {
    postsContent: string;
    setPostsContent: React.Dispatch<React.SetStateAction<string>>;
};

const EditorPosts = (props: IProps) => {
    const { postsContent, setPostsContent } = props;
    const ref = useRef<Quill & { editor: QuillEditor }>(null);

    // lấy ra phần tử text trong html
    const plainString = postsContent.replace(/<[^>]+>/g, '');

    const editorStyle: React.CSSProperties = {
        // Sử dụng 'inherit' để giữ font size mặc định nếu không thỏa điều kiện
        fontSize: plainString.trim().length >= 85 ? '16px' : '24px',
    };

    useEffect(() => {
        if (ref.current) {
            const editorRef = ref.current;
            editorRef.editor.root.setAttribute('spellcheck', 'false');
            const editor = editorRef.getEditor();

            // Add a matcher for images to prevent them from being pasted
            editor.clipboard.addMatcher(Node.ELEMENT_NODE, (_node, delta) => {
                const ops: DeltaOperation[] | { ops: DeltaOperation[] } | undefined = [];
                delta.ops?.forEach((op) => {
                    if (op.insert && typeof op.insert === 'object' && op.insert.image) {
                        // Don't push the op if it's an image
                    } else {
                        // Push all other ops normally
                        ops.push(op);
                    }
                });
                delta.ops = ops;
                return delta;
            });

            editor.clipboard.addMatcher(Node.ELEMENT_NODE, (_node, delta) => {
                const ops: DeltaOperation[] | undefined = [];

                delta.ops?.forEach((op) => {
                    if (op.insert && typeof op.insert === 'string') {
                        ops.push({
                            insert: op.insert,
                            // attributes: { color: 'white' },
                        });
                    } else {
                        ops.push(op);
                    }
                });
                delta.ops = ops;
                return delta;
            });

            editor.clipboard.addMatcher('SCRIPT', () => {
                return new Delta();
            });
        }
    }, []);

    return (
        <div className={cx('main-new-posts', 'px-2 max-h-[calc(50vh)] overflow-auto')}>
            <Quill
                ref={ref}
                value={postsContent}
                theme="bubble"
                id="form-new-posts"
                className="text-white"
                style={editorStyle}
                onChange={(text) => setPostsContent(text)}
                placeholder="Long ơi, bạn đang nghĩ gì thế?"
            />
        </div>
    );
};

export default EditorPosts;
