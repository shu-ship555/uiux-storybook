import { Button } from "./components/atoms/Button";
import { ButtonSample } from "@/components/shadcnui/button";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800">
        Atomic Design Development
      </h1>

      <div className="flex gap-4">
        <Button label="Primary Button" variant="primary" onClick={() => alert('Primary!')} />
        <Button label="Secondary Button" variant="secondary" onClick={() => alert('Secondary!')} />
        <div className="flex gap-4">
          <ButtonSample>
            普通のボタン
          </ButtonSample>
          <ButtonSample variant="destructive">
            削除ボタン
          </ButtonSample>

          <ButtonSample variant="outline">
            枠線ボタン
          </ButtonSample>

          <ButtonSample variant="ghost">
            幽霊ボタン
          </ButtonSample>
        </div>
      </div>
    </div>
  );
}

export default App;