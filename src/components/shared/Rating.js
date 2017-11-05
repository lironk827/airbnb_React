//*****************==- Rating as class  -== ******************/
// import React, { Component } from 'react';
// import classnames from 'classnames'

// export default class Rating extends Component {
//     constructor(props) {
//         super(props)
//         this.starsCount = this.props.rating
//     }

//     render() {
//         let stars = []
//         let className = ''
//         for (let i = 0; i < 5; i++) {
//             let result = this.starsCount - i;
//             if (result >= 1) {
//                 className = 'fa fa-star'
//             } else {
//                 if (result < 1 && result >= 0.5) {
//                     className = 'fa fa-star-half-o'
//                 } else {
//                     className = 'fa fa-star-o'
//                 }
//             }
//             stars.push(<span className={className} />)
//         }
//         return (
//             <div>
//                 {stars}
//             </div>
//         )
//     }
// }


//*****************==- Rating as stateless function   -== ******************/
import React, { Component } from 'react';
import classnames from 'classnames'

export default function Rating({ rating }) {
    let stars = []
    for (let i = 0; i < 5; i++) {
        let cl = ['green fa']
        let result = rating - i;
        if (result >= 1) {
            cl.push('fa-star')
        } else {
            if (result < 1 && result >= 0.5) {
                cl.push('fa-star-half-o')
            } else {
                cl.push('fa-star-o')
            }
        }
        stars.push(<span key={i} className={classnames(cl)} style={{'color':'#008489'}} />)
    }
    return (
        <div>
            {stars}
        </div>
    )
}
