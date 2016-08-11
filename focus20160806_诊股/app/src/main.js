require('./global.css');
import Vue from 'vue';
import content from './module/content.vue';
new Vue({
	el : 'body',
	components : { content }
});
