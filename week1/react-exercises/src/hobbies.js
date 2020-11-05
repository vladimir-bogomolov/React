function Hobbies(props) {
    return <li>{props.name}</li>;
  }

export function HobbyList() {
    const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];

    return <ul>{hobbies.map(hobby => <Hobbies name={hobby}/>)}</ul>;
  }

