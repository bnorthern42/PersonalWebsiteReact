import React from 'react';
import './HeroProj.css';
import ProjCards from "./ProjCards";

function ProjSection(props) {
    return (
        <div className='mainSection'>
            <ProjCards
            source={`${process.env.PUBLIC_URL}/images/diapl.jpg`}
            title='Diamond Plastics Website'
            description='Squarespace use and design'
            link='https://www.diamondplastics.net/'
            />
            <ProjCards
                source={`${process.env.PUBLIC_URL}/images/npm-seeklogo.com.svg`}
                title='search-pdf-regex'
                description='Simple pdf search with REGEX. Promised based. Inspired by simplicity. When all you want is something simple nothing complex that will lead to tears, hours on stack overflow, etc...'
                link='https://www.npmjs.com/package/search-pdf-regex'
            />
            <ProjCards
                source={`${process.env.PUBLIC_URL}/images/nistLogo.jpg`}
                title='CVE2DBMS'
                description='This service is responsible in taking in CVE JSON Data and importing them into a Relational Database Management System.
                We are using PostgreSQL. Most other solutions rely on NO-SQL.
                This solution provides and easy solution to clean data for Data Science and other Statistical work around the use of CVE data.'
                link='https://github.com/vercasm/CVE2DBMS'
            />
            <ProjCards
                source={`${process.env.PUBLIC_URL}/images/cryptoCoins.jpg`}
                title='Crypto Trade Aggregator'
                description='This app pulls in CSV dumps of your trades and aggregates them into PostgreSQL. Supports dumps from KuCoin'
                link='https://github.com/bnorthern42/Crypto-Trade-Aggregator'
            />
            <ProjCards
                source={`${process.env.PUBLIC_URL}/images/stonks.jpg`}
                title='ROI Gui'
                description='
                    A simple GUI for determining simple ROI.
                    I created this for doing trading and setting targets. Instead of calculating my simple ROI multiple times in a calculator, input 1 number and output all the possible rates which are relevant in trading.
                    '
                link='https://github.com/bnorthern42/ROI_GUI'
            />
            <ProjCards
                    source={`${process.env.PUBLIC_URL}/images/Emacs.jpeg`}
                    title='Personal Emacs Config'
                    description='
                    A repo where I share my settings for configuring Emacs to be the ultimate IDE / Text Editor
                    '
                    link='https://github.com/bnorthern42/textEditors-Configs/tree/main/Emacs/.doom.d'
            />
            <ProjCards
                source={`${process.env.PUBLIC_URL}/images/gamingGeneric.jpg`}
                title='Wurm-Random-Tools'
                description='
                    A repo containing differnt tools that I use in the game Wurm online. This includes a skill dump to json converter (bash),
                    a GNUPlot tick v skill generator, and some related skilling tools for knowing what quality or skill is required when improving items.
                    '
                link='https://github.com/bnorthern42/Wurm-Random-Tools'
            />

        </div>
    );
}

export default ProjSection;