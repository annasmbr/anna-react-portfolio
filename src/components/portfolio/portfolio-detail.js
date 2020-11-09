import React, { Component }  from "react";
import axios from "axios";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {}
    };
  }

  componentWillMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get(
        `https://annasmbr.devcamp.space/portfolio/portfolio_items/${
          this.props.match.params.slug
        }`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          portfolioItem: response.data.portfolio_item
        });
        //console.log("res", response);
      })
      .catch(error => {
        console.log("getportfolioitem error", error);
      });
  }

  render() {
    const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url
    } = this.state.portfolioItem;

    const bannerStyles = {
      backgroundImage: "url(" + banner_image_url + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    };

    const logoStyles = {
      width: "200px"
    };

    return (
      <div className="portfolio-detail-wrapper">
        <div className="banner" style={bannerStyles}>
          <img src={logo_url} style={logoStyles} />
        </div>

        <div className="portfolio-detail-description-wrapper">
          <div className="description">{description}</div>
        </div>

        <div className="bottom-content-wrapper">
          <a href={url} className="site-link" target="_blank">
            Visit {name}
          </a>
        </div>
      </div>
    );
  }
}

    //return (
     // <div>
       // <h2>{name}</h2>
       // <p>{description}</p>
      //</div>
    //);
  //}
//}

//export default function(props) {
  //return (
   // <div>
     // <h2>Portfolio Detail for {props.match.params.slug}</h2>
    //</div>
  //);
//}

//<h2>Portfolio Detail for {this.props.match.params.slug}</h2>

//banner_image_url: "https://devcamp-space.s3.amazonaws.com/6ZkGM7J4nEuxZToYZSdsXd93?response-content-disposition=inline%3B%20filename%3D%22crondose.jpg%22%3B%20filename%2A%3DUTF-8%27%27crondose.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20201108%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20201108T115412Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=d0a637ffeb78d0c7c269f81d8690e20dcbc17d3367c4ee226a2a70196064ce42"
//category: "tecnology"
//column_names_merged_with_images: (9) ["id", "name", "description", "url", "category", "position", "thumb_image", "banner_image", "logo"]
//description: "Online tutorials and productivity tips"
//id: 22165
//logo_url: "https://devcamp-space.s3.amazonaws.com/aG5qAhz2NkYgPyoAxfftsTYw?response-content-disposition=inline%3B%20filename%3D%22crondose.png%22%3B%20filename%2A%3DUTF-8%27%27crondose.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20201108%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20201108T115412Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=9cdb1fe781ded5f6734bb997e7de14907f9fc447dc57f3a3c44dd78adc4c463f"
//name: "Crondose"
//position: 0
//thumb_image_url: "https://devcamp-space.s3.amazonaws.com/LZqkyoqbn3AKTz1Pb3MMVQcK?response-content-disposition=inline%3B%20filename%3D%22crondose.jpg%22%3B%20filename%2A%3DUTF-8%27%27crondose.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20201108%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20201108T115412Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=1cb62454fb549c3d94a83d17501badb9455cb2f56e775c72fdf59e200b8a9daa"
//url: "https://crondose.com"