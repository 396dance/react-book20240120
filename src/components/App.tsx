import React, { ChangeEvent, FC, useCallback, useState } from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList.tsx";
import { useMemoList } from "../hooks/useMemoList.ts";

export const App: FC = () => {
  // カスタムフックからそれぞれ取得
  const { memos, addTodo, deleteTodo } = useMemoList();
  //　テキストボックスState
  const [text, setText] = useState<string>("");

  // テキストボックス入力時に入力内容をStateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  // 追加ボタン押下時
  const onClickAdd = () => {
    //　カスタムフックのロジック実行
    addTodo(text);
  };

  // 削除ボタン押下時（何番目を押下されたかを引数で受け取る）
  const onClickDelete = useCallback(
    (index: number) => {
      // カスタムフックのメモ削除ロジック実行
      deleteTodo(index);
    },
    [deleteTodo]
  );

  return (
    <div>
      <h1>簡単メモアプリ</h1>
      {/* input:入力フォーム 
          type属性:フォームの種類(テキスト、数字のみ、検索フォーム等) 
          value:初期値を設定又は入れたい値を記述 
          onChange:フォームの内容が変化した時に発火する
      */}
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
};

const SButton = styled.button`
  mergin-left: 16px;
`;
