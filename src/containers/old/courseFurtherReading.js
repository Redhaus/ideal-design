import React from 'react'
import { Grid, Checkbox,  Divider, Icon } from 'semantic-ui-react'
import { iconSize, iconColor } from '../../utils/utils';

const CourseFurtherReadings = (props) => {

  // const icondata = [
  //   "color='red",
  //   "size='huge'"

  // ]

  const handleOnClick = (e, data) => {
    props.saveFurther(data)
  }

  const handleReadings = (readings) => {



    return readings.map((item, key) => {

      const title = (
        <Grid.Column key={key}>
          <div className="further-reading">
            <h5>{item.author} | {item.date}</h5>
            <Checkbox label={item.title}
                data={item}
                desc={item.description}
                value={item.title}
                onClick={handleOnClick}
            />
            <a href={item.link} target="blank">
                <Icon size={iconSize}
                  color={iconColor}
                  name="external"
                  link
                  className="icon-right" />
            </a>
          </div>
        </Grid.Column>
      )

      const essaytitle = (
        <Grid.Column key={key}>
          <div className="further-reading">
            <h5>{item.source}  
                <a href={item.link} target="blank">
                <Icon size={iconSize} 
                    color={iconColor} 
                    name="download" 
                    link 
                    className="icon-right"/> 
                </a>
            </h5>
            <Checkbox data={item} label={item.title} desc={item.description} onClick={handleOnClick} />
            <p>
              {item.author ? `${item.author}` : ''}
              {item.author && item.date ? ' | ' : ''}
              {item.date ? `${item.date}` : ''}

            </p>
          </div>
        </Grid.Column>
      )

      // const popup = (
      //   <div>
      //     <h4>{item.title}</h4>
      //     <p>{item.description}</p>
      //   </div>
      // )

      // const poemTemplate = (
      //   <Popup key={key} trigger={title} content={popup} size={popSize} style={style} inverted />
      // )

      // const essayTemplate = (
      //   <Popup key={key} trigger={essaytitle} content={popup} size={popSize} style={style} inverted />
      // )


      if (readings[key].source) {
        return essaytitle;
      } else {
        return title;
      }

    })

  }


  return (
    <Grid>
      <Grid.Row columns={1}>
        <Grid.Column>
          <div><h4 className="caps">Further Reading</h4></div>
        </Grid.Column>

     
      </Grid.Row>
      <div><h3>Poetry</h3></div>
      
      <Grid.Row columns={3}>
        {handleReadings(props.readings.poems)}
      </Grid.Row>

      <Grid.Row columns={1}>
        <Grid.Column>
          <Divider />
        </Grid.Column>
      </Grid.Row>
      <div> <h3>Essays</h3></div>

      <Grid.Row columns={3}>
        {handleReadings(props.readings.essays)}
      </Grid.Row>
    </Grid>
  )
}

export default CourseFurtherReadings;