import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';


function Skills() {
  return ( <section id="skills" className={styles.container}>
        <h1 className="sectionTitle"> Skills </h1>  
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Python" />
            <SkillList src={checkMarkIcon} skill="Django" />
            <SkillList src={checkMarkIcon} skill="Django Rest Framework" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="React" />
            <SkillList src={checkMarkIcon} skill="Javascript" />
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="Bootstrap" />
            <SkillList src={checkMarkIcon} skill="Tailwind" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Git" />
            <SkillList src={checkMarkIcon} skill="Gitlab" />
            <SkillList src={checkMarkIcon} skill="Redux" />
            <SkillList src={checkMarkIcon} skill="Jest" />
        </div>

    </section>
);
  
}

export default Skills;