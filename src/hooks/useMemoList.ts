import { useCallback, useState } from "react";

// メモ一覧に関するカスタムフック
export const useMemoList = () => {
  // メモ一覧State
  const [memos, setMemos] = useState<string[]>([]);

  // メモ追加ロジック
  const addTodo = useCallback(
    (text: string) => {
      const newMemos = [...memos];
      newMemos.push(text);
      setMemos(newMemos);
    },
    [memos]
  );

  const deleteTodo = useCallback(
    (index: number) => {
      const newMemos = [...memos];
      newMemos.splice(index, 1);
      setMemos(newMemos);
    },
    [memos]
  );

  return { memos, addTodo, deleteTodo };
};
