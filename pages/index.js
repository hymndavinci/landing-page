import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    
    <main 
    className={styles.container}>
      <h1 className={styles.title}>
        DAHAYU <span className={styles.gradientText}>SERVER</span>
      </h1>
      <p className={styles.description}>
      DAHAYU is your digital sanctuary — a cozy, chill space for those looking to connect, unwind, and feel at home. Whether you're here to chat, share stories, listen to music, or just hang out quietly, you're always welcome. Introvert or extrovert, loud or lowkey — everyone belongs here.
      </p>
      <div className={styles.buttons}>
  <a
    href="https://discord.gg/2aBGbhp8mV"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.btnPrimary}
  >
    Link Discord
  </a>
  <a href="https://t.me/cahay4ngkasa" className={styles.btnSecondary}>Contact Us</a>
</div>

    </main>
  )
}
