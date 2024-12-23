declare namespace kintone.types {
  interface Fields {
    文字列__1行_: kintone.fieldTypes.SingleLineText;
    発行No: kintone.fieldTypes.SingleLineText;
    文字列__1行__0: kintone.fieldTypes.SingleLineText;
    正解: kintone.fieldTypes.SingleLineText;
    組織選択: kintone.fieldTypes.OrganizationSelect;
    ユーザー選択: kintone.fieldTypes.UserSelect;
  }
  interface SavedFields extends Fields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    更新日時: kintone.fieldTypes.UpdatedTime;
    作成日時: kintone.fieldTypes.CreatedTime;
  }
}
