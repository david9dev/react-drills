import React from 'react'

function List(props) {
    let contents = props.toDo.map((curVal, index) => {
        return (<h2 key={index}>
            {curVal}
        </h2>);
    });
    return (
        <div>
            {contents}
        </div>);
}

export default List;

// class List extends React.Component {
//     render() {
//         let contents = this.props.toDo.map((curVal, index) => {
//             return (
//             <h2 key={index}>
//                 {curVal}
//             </h2>);
//         });
//         console.log(this.props.toDo)
//         console.log(contents)
//         return ( <div>
//             {contents}
//         </div>
//             );
//     }
// }

// export default List