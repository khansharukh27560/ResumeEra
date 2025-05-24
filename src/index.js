import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import { HelmetProvider } from 'react-helmet-async';
import store,{ persistor } from './Redux/store';
import ShareButtons from './component/shareButton/ShareButtons';
import best_logo from '../src/image/best_logo.webp';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './component/Loader';

// Preload critical image in HTML head
const preloadLink = document.createElement('link');
preloadLink.rel = 'preload';
preloadLink.href = best_logo;
preloadLink.as = 'image';
document.head.appendChild(preloadLink);

const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));

// Hydrate ShareButtons separately
const shareButtonsElement = document.getElementById('share-buttons');
const helmetContext = {};

if (shareButtonsElement) {
    const url = window.location.href;
    const title = document.title;
    const image = document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';

    ReactDOM.hydrateRoot(
        shareButtonsElement,
        <HelmetProvider context={helmetContext}>
            <Auth0Provider
                domain="sharukhmirza88.us.auth0.com"
                clientId="XQF85FTYI87P9tX4z18Nlw1npy1N8Bnx"
                authorizationParams={{ redirect_uri: window.location.origin }}
            >
                <Provider store={store}>
                    <ShareButtons url={url} title={title} image={image} />
                </Provider>
            </Auth0Provider>
        </HelmetProvider>
    );
}

root.render(
    <HelmetProvider context={helmetContext}>
        <Auth0Provider
            domain="sharukhmirza88.us.auth0.com"
            clientId="XQF85FTYI87P9tX4z18Nlw1npy1N8Bnx"
            authorizationParams={{ redirect_uri: window.location.origin }}
        >
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Suspense
                        fallback={
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100vh',
                                    flexDirection: 'column',
                                    background: 'linear-gradient(135deg, #cafaca, #013001)'
                                }}
                            >
                                <Loader />
                                <small>...</small>
                            </div>
                        }
                    >
                        <App />
                    </Suspense>
                </PersistGate>
            </Provider>
        </Auth0Provider>
    </HelmetProvider>
);

reportWebVitals();
