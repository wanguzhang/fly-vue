<template>
    <div id="app">
        <h1>Scroll Behavior</h1>
        <ul>
            <li>
                <router-link to="/">
                    /
                </router-link>
            </li>
            <li>
                <router-link to="/foo">
                    /foo
                </router-link>
            </li>
            <li>
                <router-link to="/bar">
                    /bar
                </router-link>
            </li>
            <li>
                <router-link to="/bar#anchor">
                    /bar#anchor
                </router-link>
            </li>
            <li>
                <router-link to="/bar#anchor2">
                    /bar#anchor2
                </router-link>
            </li>
            <li>
                <router-link to="/bar#1number">
                    /bar#1number
                </router-link>
            </li>
        </ul>
        <router-view class="view" />
    </div>
</template>
