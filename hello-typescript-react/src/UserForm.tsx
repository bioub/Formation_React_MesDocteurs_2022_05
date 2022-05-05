import { ChangeEvent, Component, FormEvent, useState } from 'react';

// type Props = {};

type UserData = {
  isGoing: boolean;
  numberOfGuests: number;
};

// class UserForm extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event: ChangeEvent<HTMLInputElement>) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     } as any);
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Is going:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange}
//              />
//         </label>
//         <br />
//         <label>
//           Number of guests:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange}
//             />
//         </label>
//       </form>
//     );
//   }
// }

function UserForm() {
  const [userData, setUserData] = useState<UserData>({
    isGoing: true,
    numberOfGuests: 2,
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setUserData({
      [name]: value,
    } as any);
  }

  return (
    <form>
      <label>
        Is going:
        <input name="isGoing" type="checkbox" checked={userData.isGoing} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Number of guests:
        <input name="numberOfGuests" type="number" value={userData.numberOfGuests} onChange={handleInputChange} />
      </label>
    </form>
  );
}

export default UserForm;
