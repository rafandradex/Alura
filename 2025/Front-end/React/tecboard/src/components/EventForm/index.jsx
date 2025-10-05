import "./event-form.styles.css";
import { FormField } from "../FormField";
import { InputField } from "../InputField";
import { Label } from "../Label";
import { TitleForm } from "../TitleForm";
import { ButtonField } from "../ButtonField";
import { DropDownList } from "../DropDownList";

export function EventForm({ themes, submitted }) {
  function submittedForm(formData) {
    console.log("opa, tá na hora de criar um no evento", formData);
    const event = {
      cover: formData.get("cover"),
      theme: themes.find(function (item) {
        return item.id == formData.get("theme");
      }),
      date: new Date(formData.get("eventDate")),
      title: formData.get("eventName"),
    };
    submitted(event);
  }

  return (
    <form className="event-form" action={submittedForm}>
      <TitleForm>Preencha para criar um evento:</TitleForm>
      <div className="fields">
        <FormField>
          <Label htmlFor="eventName">Qual o nome do evento?</Label>
          <InputField
            type="text"
            id="eventName"
            name="eventName"
            placeholder="Summer dev hits"
          />
        </FormField>

        <FormField>
          <Label htmlFor="cover">Qual o endereço da imagem da capa?</Label>
          <InputField
            type="text"
            id="cover"
            name="cover"
            placeholder="http://..."
          />
        </FormField>

        <FormField>
          <Label htmlFor="eventDate">Data do evento</Label>
          <InputField type="date" id="eventDate" name="eventDate" />
        </FormField>

        <FormField>
          <Label htmlFor="theme">Tema do evento</Label>
          <DropDownList id="theme" name="theme" itens={themes} />
        </FormField>
      </div>
      <ButtonField>Criar evento</ButtonField>
    </form>
  );
}
