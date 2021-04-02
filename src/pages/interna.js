import React from 'react';
import { getPost } from '../services/index';

class Interna extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  async componentDidMount() {
    const slug = this.props.match.params.slug;
    this.setState({
      data: await getPost(slug)
    })
  }; // CONTINUAR A POPULAR A PAGINA INTERNA

  render() {
    // const param = this.props.match.params.slug;
    // console.log(param);
    return(
      <div>
        <h1>Página interna</h1>
      </div>
    )
  }
}

export default Interna;
