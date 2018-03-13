import React from 'react';
import {Switch, Card} from 'antd';


const gridStyle = {
    width: '100%',
    height: '40px'
  };

class Skills extends React.Component {

    constructor(props){
        super(props)
    }


    handleSelect = (skill) => {
        // console.log(data)
        this.props.saveGoals(skill)
    }

    handleSkills = (skills) => {

        return skills.map((skill, key) => {
            const selectedClass = this.props.goalSelect.includes(skill)
            ? "selected"
            : "";
            

            const  skillTitle = (
                    <div key={key} className="skill-goals">
                        <Card className={` ${selectedClass}`} bordered={false}>
                    <Switch
                    checked={selectedClass ? true : false}
                    className="skill-switch"
                    size="small"
                    onChange={() => this.handleSelect(skill)}
                  />
                    {skill}
                    </Card>
                    </div>
            )

          

            return skillTitle;

        })

    }

    render(){
    return (
        <div className="skills-inner"> 
            {this.handleSkills(this.props.skills)}
        </div>
    )
    }
};

export default Skills;
