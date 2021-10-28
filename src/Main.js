import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import HornedBeast from './HornedBeast.js';
import './Main.css';
import data from './data.json'

class Main extends Component {


    render(){
        return(
            <Container>
                {
                    data.map(element => {
                        return (
                            <div>
                            <HornedBeast title={element.title} description={element.description} image_url={element.image_url} keyword={element.keyword} horns={element.horns} />
                            </div>
                        )
                    })
                }
            </Container>
        )
    }
}

export default Main;
// {/* <HornedBeast 
// beastTitle={'Uniwhal'} 
// description={'A unicorn and a narwhal nuzzling their horns'} 
// url={"http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"} 
// keyword={'narwhal'} 
// horns={'1'} />
// <HornedBeast 
// beastTitle={'Rhino Family'} 
// description={'Parent rhino with two babies'} 
// url={"https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"} 
// keyword={'rhino'} 
// horns={'2'}/>
// <HornedBeast 
// beastTitle={'Unicorn Head'} 
// description={'Someone wearing a very silly unicorn head mask'} 
// url={"https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"} 
// keyword={'unicorn'} 
// horns={'1'}/>
// <HornedBeast 
// beastTitle={'Unilego'} 
// description={'Lego figurine dressed in a unicorn outfit'} 
// url={"https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80"} 
// keyword={'unilego'} 
// horns={''}/>
// <HornedBeast
// beastTitle={'Basically a unicorn'}
// description={'A narwhal is basically a unicorn after all, right?'}
// url={'https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg'}
// keyword={'narwhal'}
// horns={'1'}/>
// <HornedBeast
// beastTitle={'#truth'}
// description={'The truth behind narwhals'}
// url={'https://i.pinimg.com/originals/16/cf/2a/16cf2a0b3fd51b9bee08bb6296193b75.jpg'}
// keyword={'narwhal'}
// horns={'1'}/>
// <HornedBeast
// beastTitle={'Baby Rhino'}
// description={'This is actually a figurine but it looks kinda real'}
// url={'https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg'}
// keyword={'rhino'}
// horns={'2'}/>
// <HornedBeast
// beastTitle={'Cera'}
// description={"Three horns but still,horns.And who doesn't like The Land Before Time?"}
// url={'https://vignette.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png/revision/latest?cb=20180422005003'}
// keyword={'triceratops'}
// horns={'3'}/>
// <HornedBeast
// beastTitle={'Narwhal Costume'}
// description={'A woman wearing a blue narwhal costume'}
// url={'https://ae01.alicdn.com/kf/HTB18GwSQVXXXXaZaXXXq6xXFXXXh/Animal-Cosplay-Costume-Narwhal-Onesie-Mens-Womens-Cartoon-Whale-Pajamas.jpg'}
// keyword={'narwhal'}
// horns={'1'}/>
// <HornedBeast
// beastTitle={'Rhino costume'}
// description={'Mascots have to get their costumes somewhere'}
// url={'https://www.shopmascot.com/image/cache/mascotnew/new196-800x800.jpg'}
// keyword={'rhino'}
// horns={'2'}/>
// <HornedBeast
// beastTitle={'Believe'}
// description={'I believe in unicorns, do you?'}
// url={'https://www.tinselbox.com/wp-content/uploads/2018/03/I-BELIEVE-IN-UNICORNS-FREE-PRINTABLE-WATERCOLOR-7-of-1.jpg'}
// keyword={'unicorn'}
// horns={'1'}/>
// <HornedBeast
// beastTitle={'Markhor'}
// description={'These wild goats eat snakes, then secretea foam that locals fight over for the antivenom properties -- how cools is that?'}
// url={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg/220px-Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg'}
// keyword={'markhor'}
// horns={'2'}/>
// <HornedBeast
// beastTitle={'Baby Markhor'}
// description={'Even the babies are adorable'}
// url={'http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi'}
// keyword={'Markhor'}
// horns={'2'}/>
// <HornedBeast
// beastTitle={'Mouflon'}
// description={'Those horns though'}
// url={'https://images.unsplash.com/photo-1558560063-931ca9822a0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
// keyword={'Mouflon'}
// horns={'2'}/>
// <HornedBeast
// beastTitle={'Addax'}
// description={"This guy is basically extinct but survives well in captivity, so they're frequently found in zoos"}
// url={'https://images.unsplash.com/photo-1556890077-020ec300d5db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'}
// keyword={'addax'}
// horns={'2'}/>
// <HornedBeast
// beastTitle={'Baby Mouflon'}
// description={'The cuteness that is a baby mouflon asleep'}
// url={'https://cbsnews3.cbsistatic.com/hub/i/r/2013/03/05/5b414225-a645-11e2-a3f0-029118418759/thumbnail/620x350/2d4cf24685b45c22912e64d2004fec8d/Baby_Mouflon_Wild_Sheep.jpg'}
// keyword={'Mouflon'}
// horns={'2'}/>
//             <HornedBeast
// beastTitle={"Happy Jackson's Chameleon"}
// description={'These are really common in Hawaii'}
// url={'https://images.unsplash.com/photo-1514036783265-fba9577fc473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}
// keyword={'Chameleon'}
// horns={'2'}/>
//             <HornedBeast
// beastTitle={"Serious Jackson's Chameleon"}
// description={'This one is very serious.'}
// url={'https://imgc.allpostersimages.com/img/print/posters/dlillc-jackson-s-chameleon_a-G-13448768-14258384.jpg'}
// keyword={'Chameleon'}
// horns={'3'}/>
//             <HornedBeast
// beastTitle={'Horned Lizard'}
// description={'Fave food:ants'}
// url={'https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false'}
// keyword={'lizard'}
// horns={'100'}/>
//             <HornedBeast
// beastTitle={'Smaug'}
// description={"Fan illustration of Smaug from 'The Hobbit'"}
// url={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg'}
// keyword={'Dragon'}
// horns={'100'}/> */}