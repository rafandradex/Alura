import { DailyBudget } from "./components/DailyBudget";
import { Aside } from "./components/Aside";
import Card from "./components/Card";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { SearchInput } from "./components/SearchInput";
import { Typography } from "./components/Typography";
import { SavingStatus } from "./components/SavingsStatus";
import { Transaction } from "./components/Transaction";
import { Button } from "./components/Button";
import { IconCurrency, IconWallet } from "./components/icons";
import { Accounts } from "./components/Accounts";

function App() {
  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside />
        <Main>
          <SearchInput name="q" />
          <div>
            <Typography variant="h1">Olá, Rafael!</Typography>
            <Typography>Veja como estão suas finanças hoje.</Typography>
          </div>
          <section className="grid grid-cols-2 items-stretch gap-6">
            <Card>
              <Card.Header>Orçamento diário disponive:</Card.Header>
              <Card.Body>
                <DailyBudget value={100} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Progresso da meta financeira</Card.Header>
              <Card.Body>
                <SavingStatus />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Movimentação financeira</Card.Header>
              <Card.Body>
                <Transaction />
                <Button>
                  <IconCurrency /> Adicionar transação
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Minhas contas</Card.Header>
              <Card.Body>
                <Accounts />
                <Button>
                  <IconWallet /> Adicionar conta
                </Button>
              </Card.Body>
            </Card>
          </section>
        </Main>
      </Container>
    </div>
  );
}

export default App;
