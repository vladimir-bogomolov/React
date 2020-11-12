function Hobbies(props) {
    return <li>{props.name}</li>;
  }

export function HobbyList() {
    const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
    const hobbiesForList = hobbies.map(hobby => {
      return {'name': hobby, 'id': Math.random() * 10000000};
    });
    return <ul>{hobbiesForList.map(hobby => <Hobbies name={hobby.name} key={hobby.id}/>)}</ul>;
  }

