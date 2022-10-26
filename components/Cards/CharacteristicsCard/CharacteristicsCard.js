import React from 'react';
import Container from '@mui/material/Container';
import Image from 'next/image';
import { htmlConverter } from '../../../utils/utils';
import styles from './CharacteristicsCard.module.scss'

const CharacteristicsCard = ({item, flow}) => {
  // console.log('item charact:', item)

  return (  
    <div className={`panel ${flow}`}>
      <Container>
        <div className="bootstrap-container">
          <article className={styles.characteristicsCard}>
            <div className="grid-row">
              <div className={styles.characteristicsContent} dangerouslySetInnerHTML={htmlConverter(item.content)}></div>
              <div className={styles.characteristicsImg}>
                <figure >
                  <img src={item.image} alt="characteristic" className="img-responsive" />
                </figure>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </div>
  );
}
 
export default CharacteristicsCard;