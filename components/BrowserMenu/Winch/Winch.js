import Grid from '@mui/material/Grid';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import Container from '@mui/material/Container';
import styles from './Winch.module.scss'

export default function Winch() {
  return (
    <section className={styles.winch}>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ position: 'relative' }}
          >
          <p>Despacho gratis sobre $50.000</p>
          <div className={styles.helpPanel}>
            <ul>
              <li>
                <LocalShippingOutlinedIcon/>
                <a href="" rel="noreferrer">Seguimiento</a>
              </li>
              <li>
                <SmsOutlinedIcon/>
                <a href="" rel="noreferrer">Ayuda</a>
              </li>
            </ul>
          </div>
        </Grid>
      </Container>
    </section>
  )
}
