import "./drop-down-list.style.css";

export function DropDownList({ itens, ...rest }) {
  return (
    <select {...rest} className="drop-down-list" defaultValue="">
      <option value="" disabled>
        Selecione uma opção
      </option>
      {itens.map((item) => {
        return (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
}
