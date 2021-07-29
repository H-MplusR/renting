import React from 'react';
import axios from 'axios';



class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            title: "",
            description: "",
            numberOfVisitor: 0,
            picture1: ""
        }
    }


    componentDidMount() {
        axios.get('/api/renting/fetching').then(({ data }) => {
            this.setState({ data })
            console.log(data)
        })
    }


    render() {

        var list = [];
        this.state.data.map((element, index) => {
            list.push(<div className="card" key={index}>
                <div className="card-left">
                <img src="left-side.jpg" alt="Avatar" />
                </div>
                <div className="container">
                    <h4><b>{element.title}</b></h4>
                    <p>{element.description}</p>
                </div>
            </div>
            )
          }
        )
        return (
            <div>
               <div  id="row" class="row">{list}

               </div>

                


            </div>
        )

    }



}




export default Search;