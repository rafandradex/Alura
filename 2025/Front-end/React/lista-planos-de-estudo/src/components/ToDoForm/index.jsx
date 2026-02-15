import { Button } from "../Button";
import { Input } from "../Input";

export function ToDoForm({ onSubmit, defaultValue }) {
  return (
    <form action={onSubmit}>
      <Input placeholder="Digite o item que deseja adicionar" name='description' defaultValue={defaultValue} required />
      <Button>Salvar item</Button>
    </form>
  );
}
