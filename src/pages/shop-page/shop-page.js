import { Component } from "react";
import PreviewCollection from "../../components/preview-coollection/preview-collection";
import ShopData from "./shop-data";

class ShopPage extends Component {
    state =  {
        collections: ShopData
    }
    render(){
        return(
            <div className='shop-page'> 
            {
                this.state.collections.map((collection) => {
                    return <PreviewCollection key={collection.id} title={collection.title} items={collection.items}/>
                })
            }
             </div>
        )
    }
}

export default ShopPage