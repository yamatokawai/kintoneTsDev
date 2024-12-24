interface KintoneEvent {
  record: kintone.types.SavedFields;
}
kintone.events.on("app.record.create.show", (event: KintoneEvent) => {
  console.log(event.record);
});
