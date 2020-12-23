import React from 'react'
import "./Seasons.css"

const seasonConfig = {
  winter: {
    iconName: 'snowflake outline',
    text: 'santa yo hoo hoo hoo hoo'
  },
  summer: {
    iconName: 'sun outline',
    text: "It's summer timeeeeeeeeeeeeeeeeeeeeeee!"
  }
}

const getSeason = (latt, month) => {
  if (latt > 0) {
    return month > 2 && month < 9 ? 'summer' : 'winter'
  } else {
    return month > 2 && month < 9 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = (props) => {
  const month = new Date().getMonth();
  const season = getSeason(props.latt, month);
  return (
    <div className={`season-display ${season}`}>
      <i className={`massive ${seasonConfig[season].iconName} icon top-icon`} />
      <h1 className={"text-display"}>
        {seasonConfig[season].text}
      </h1>
      <i className={`massive ${seasonConfig[season].iconName} icon bottom-icon`} />
    </div>
  );
}

export default SeasonDisplay