import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './Main.css';
import 'primereact/resources/themes/luna-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'elegant-icons/style.css';

import home from './views/home';

class Main extends Component {
    
    render() {
        return (
            <div>
                   <header>
                        <nav>
                            <Link className="item_menu borda_direita" to="/home">
                                <div aria-role="menuitem">
                                    <span aria-hidden="true" className="icon_folder-alt"></span>
                                     Arquivos
                                </div>
                            </Link>
                            <Link className="item_menu borda_direita" href="/series" to="/filmes">
                                <div aria-role="menuitem">
                                    <span aria-hidden="true" className="icon_cogs"></span>
                                    Editar
                                </div>
                            </Link>
                            <Link className="item_menu borda_direita" href="/videos" to="/filmes">
                                <div aria-role="menuitem">
                                    <span aria-hidden="true" className="icon_globe-2"></span>
                                    Torrent
                                </div>
                            </Link>
                            <Link className="item_menu" href="/arquivos" to="/filmes">
                                <div aria-role="menuitem">
                                    <span aria-hidden="true" className="icon_shield_alt"></span>
                                    Ajuda
                                </div>
                            </Link>
                        </nav>
                   </header>
                   <main>
                        <Switch>
                            <Route path="/" component={home}/>
                        </Switch>
                   </main>
            </div>
        );
    }
}

export default Main;
