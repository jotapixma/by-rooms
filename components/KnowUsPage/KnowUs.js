import React, { useState } from 'react';
import { htmlConverter } from '../../utils/utils';
import Container from '@mui/material/Container';
import styles from './KnowUs.module.scss'

let items = [
  {
    "id": 1,
    "description": '<p>Nuestros lentes de cultivo indoor, no son solo para protección y contraste, también son gafas de sol y accesorio de moda, ya que conjugan estilo y los cuidados necesarios para tus ojos.</p> <p>Las gafas Rooms poseen los filtros específicos que permiten ver en un ambiente iluminado con sistema HPS y LEC, en calidad HD y así puedes detectar a tiempo plagas, carencias y excesos.</p> <p>Puedes llevar un registro fotográfico nítido colocando la cámara a través de la lente.</p><p>Neutralizan completamente la radiación nociva UVA, UVB, UVC.</p><p>Con estas luminarias hay que tener más cuidado que al exponerse a la luz solar, ya que la fuente luminosa se encuentra mucho más próxima y las paredes la reflejan intensamente</p>'
  },
  {
    "id": 2,
    "description": '<p>Nos mueve la pasión por el cultivo de flores y el cuidado visual, con más de 20 años de experiencia en el área óptica.</p>  <p>UTILIZAMOS PLASTICOS(POLIMEROS) DE BASE BIOLOGICA.APROVECHANDO EL SALVADO DE TRIGO Y LAS SOBRAS DEL CAFE PARA CREAR UN BIO- PLASTICO DE ALTA INGENIERIA CON RESISTENCIA A LOS ATAQUES QUIMICOS Y ESTABILIDAD A ALTAS TEMPERATURAS.</p> <p>MATERIAL DE VANGUARDIA Y ECO FRIENDLY. PARA BRINDAR PROTECCION + CONFORT EN TU MIRADA. PARA COSECHAR CALIDAD, PERFECCION, RENDIMIENTO CON UN NIVEL PRO, SEMBRAMOS ACTITUD.</p>'
  },
];

const KnowUsPage = () => {
  return (
    <section className={styles.knowUsPanel}>
      <Container>
        <h2 className="default-title text-center">¿Por que elegirnos?</h2>
        <div dangerouslySetInnerHTML={htmlConverter(items[1].description)}></div>
        <h2 className="default-title text-center">Nuestras gafas</h2>
        <div dangerouslySetInnerHTML={htmlConverter(items[0].description)}></div>
      </Container>
    </section>
  );
}

export default KnowUsPage;