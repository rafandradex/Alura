import { Aside } from "./components/Aside";
import Card from "./components/Card";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { SavingsStatus } from "./components/SavingsStatus";
import { Searchinput } from "./components/SearchInput";
import { Typography } from "./components/Typography";
import { DailyBudget } from "./components/DailyBudget";
import styles from "./app.module.css";
import { Transactions } from "./components/Transactions";
import { Accounts } from "./components/Accounts";

function App() {
  return (
    <>
      <Container>
        <Aside />
        <Main>
          <div className={styles.container}>
            <Searchinput />
            <div>
              <Typography variant="h1">Olá, Vinny!</Typography>
              <Typography variant="body">
                Veja como estão suas finanças hoje.
              </Typography>
            </div>
            <section className={styles.grid}>
              <Card>
                <Card.Header>Orçamento diário disponível:</Card.Header>
                <Card.Body>
                  <DailyBudget value={200} />
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Progresso da meta financeira</Card.Header>
                <Card.Body>
                  <SavingsStatus percent={40} />
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Movimentação financeira</Card.Header>
                <Card.Body>
                  <Transactions />
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Minhas contas</Card.Header>
                <Card.Body><Accounts /></Card.Body>
              </Card>
            </section>
          </div>
        </Main>
      </Container>
    </>
  );
}

export default App;
