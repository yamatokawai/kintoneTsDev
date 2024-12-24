const HANDLE_EVENT = "app.record.create.show";
import { Test } from "./test";
interface KintoneEvent {
  record: kintone.types.SavedFields;
}

kintone.events.on(HANDLE_EVENT, (event: KintoneEvent) => {
  const aaa: Test = {
    aaa: "aaa",
  };
  console.log(aaa);

  return event;
});
