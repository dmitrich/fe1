import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
/*
Only one element returned per function
 */
const ItemsHeader = [{
    text: 'Poducts',
    link: 'ProductsLink'
    },
    {
        text: 'Services',
        link: 'ServicesLink'
    },
    {
        text: 'Prices',
        link: 'PricesLink'
    }];

const ItemsFooter = [{
    text: 'HomeFooter',
    link: 'HomeFooterLink'
},
    {
        text: 'PricesFooter',
        link: 'PricesFooterLink'
    },
    {
        text: 'ServersFooter',
        link: 'ServersFooterLink'
    }];

function App() {
  return (
    <div className="App">
        <Header items={ItemsHeader}/>
        <Content/>
        <Footer items={ItemsFooter}/>
    </div>
  );
}

export default App;
