import WebTorrent from 'webtorrent';
import React,{ Component } from 'react';
import {PanelMenu} from 'primereact/panelmenu';
import {DataTable} from 'primereact/datatable';
import {Message} from 'primereact/message';
import {TreeTable} from 'primereact/treetable';
import {ProgressBar} from 'primereact/progressbar';
import {Column} from 'primereact/column';
import {Sidebar} from 'primereact/sidebar';


import 'primeflex/primeflex.css'
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/luna-green/theme.css';


class home2 extends Component {
    constructor() {
        super();
        this.state = {};
        this.state.view = document.querySelector('#video-view');
        this.state.modal= {};
        this.state.visible = false;
        this.state.torrents = {};
        this.state.torrents.items = [
                {

                    name:' v de vingança',
                    complite:100,
                    download:200,
                    upload:0,
                    torrentId:'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'
                },
                {
                    name:' xena',
                    complite:100,
                    download:200,
                    upload:0,
                    torrentId:'magnet:?xt=urn:btih:ae8534514d0c0879eda301114ac62f45c346306e&dn=STHPRKT10EP08.mp4&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com'
                }

                                    ];
        this.state.menu = { items:[
                                    {
                                        label:'File',
                                        icon:'pi pi-fw pi-file',
                                        items:[
                                           {
                                               label:'New',
                                               icon:'pi pi-fw pi-plus',
                                               items:[
                                                 {
                                                     label:'Bookmark',
                                                     icon:'pi pi-fw pi-bookmark'
                                                 },
                                                 {
                                                     label:'Video',
                                                     icon:'pi pi-fw pi-video'
                                                  }
                                               ]
                                            }
                                        ]
                                      }
                                    ]
                           };    
        
        this.rowExpansionTemplate = this.rowExpansionTemplate.bind(this);
        this.client = new WebTorrent(); 
    }
    componentDidMount(){
        this.state.torrents.items.forEach(item=>{
            this.client.add(item.torrentId, (torrent) => { item.torrent = torrent })
        })
    }

    rowExpansionTemplate(data){
        console.log("Data!",data);
        


        this.state.view = document.querySelector('video#video-view');
        

        // Paraliza o progresso da aplicação caso o torrent selecioando n esteja pronto
        if(!data.torrent){
            
            return(
                    <>
                        <Message severity="info" text="Torrente ainda em progresso!"></Message>
                    </>
                  )
                
        }
        
        
        /*var file = data.torrent.files.find(function (file) { 

            console.log(file);
            return file.name.endsWith('.mp4')

        });
        //var file = data.torrent.files.find(function (file) { return file.name.endsWith('.rmvb')});
        file.renderTo(this.state.view)/**/
        
        console.log(data.torrent.files)
        var files = data.torrent.files;
        return (
            <>
                { 
                    files.map(function(item,index){
                        return(
                            <>
                                <label>{item.name}</label><br/>
                            </>
                        )
                    })
                }
            </>
        );

    }
    progressbarTemplate(data){
        return( 
            <ProgressBar value={data.complite}/>
         )
    }
    render() {
        return (
            <div>
                <div className="p-grid">
                     
                     <Sidebar fullScreen={true} onHide={() => this.setState({visible:false})} visible={this.state.visible}>
                        
                        <h1>hellow</h1>
                    </Sidebar>
                    <div className="p-col-8">
                        <DataTable value={this.state.torrents.items} responsive={true}  expandedRows={this.state.expandedRows} 
                                   onRowToggle={(e) => this.setState({expandedRows:e.data})}
                                   rowExpansionTemplate={(e)=>this.rowExpansionTemplate(e)}
                                   >
                            <Column expander={true} style={{width: '3em'}} />
                            <Column field="name"     header="nome"/>
                            <Column field="complite" header="completo%" body={this.progressbarTemplate} style={{textAlign:'center'}}/>
                            <Column field="download" header="download"  style={{textAlign:'center'}}/>
                            <Column field="upload"   header="upload"    style={{textAlign:'center'}}/>
                        </DataTable>
                    </div>
                    <div className="p-col-4">
                        <PanelMenu model={this.state.menu.items} />
                    </div>
                </div>
            </div>
        );
    }
}

export default home2;