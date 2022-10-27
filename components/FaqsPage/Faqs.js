import React, { useState } from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import MuiAccordion from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';
import styles from './Faqs.module.scss'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(({ theme }) => ({
  margin: '0.8rem 0',
  borderRadius: '5px',
  '&:not(:last-child)': {
    border: 0,
  },
  '&:before': {
    display: 'none',
  },
  '& .MuiAccordionSummary-root': {
    backgroundColor: '#F9F9F9',
    borderRadius: 5,
    border: '1px solid #A5A5BA;'
  },
  '& .MuiAccordionDetails-root': {
    backgroundColor: '#F6F6F9;',
    padding: '1.5rem 1.5rem 0.8rem'
  },

}));

const Faqs = () => {

  let items = [
    {
      "id": '1',
      "question": '¿Cuales son los tiempos de garantia?',
      "response": '1Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      "id": '2',
      "question": '¿Tengo garantia vitalicia?',
      "response": '2Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      "id": '3',
      "question": '¿Todos los lentes tienen protección UV?',
      "response": '3Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      "id": '4',
      "question": '¿Entregan en la ciudad te Tokio?',
      "response": '4Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
  ]

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className={styles.faqsPanel}>
      <Container>
        <div className="bootstrap-container">
          <h2 className="default-title text-center">Preguntas Frecuentes</h2>
          <div className={styles.faqsBox}>
            {
              items.map((item) => (
                <Accordion key={item.id} expanded={expanded === item.id} onChange={handleChange(item.id)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <h4 className="black">{item.question}</h4>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className={styles.faqsBox__description}>{item.response}</p>
                  </AccordionDetails>
                </Accordion>
              ))
            }
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Faqs;