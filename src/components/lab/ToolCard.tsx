import React from 'react';
import Link from 'next/link';
import styles from './ToolCard.module.css';

export interface ToolProps {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  url: string;
  isFree?: boolean;
}

const ToolCard = ({ tool }: { tool: ToolProps }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageArea}>
        {tool.icon}
        {tool.isFree && <span className={styles.badge}>FREE</span>}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{tool.name}</h3>
        <p className={styles.desc}>{tool.description}</p>
        
        <div className={styles.tags}>
          <span className={styles.tag}>{tool.category}</span>
        </div>
        
        <div className={styles.footer}>
          <Link href={tool.url} target="_blank" className={styles.linkBtn}>
            도구 써보기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
