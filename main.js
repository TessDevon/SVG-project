import './style.css'
import { gsap } from 'gsap';

gsap.to('#path332', {duration: 1, fill:'green', yoyo: true, repeat: -1 });
gsap.to('#path334', {duration: 1, fill:'green', yoyo: true, repeat: -1, delay: 0.25 });
gsap.to('#path336', {duration: 1, fill:'green', yoyo: true, repeat: -1, delay: 0.5 });
gsap.to('#path338', {duration: 1, fill:'green', yoyo: true, repeat: -1, delay: 0.75 });
gsap.to('#path340', {duration: 1, fill:'green', yoyo: true, repeat: -1, delay: 1 });

gsap.from('#path340', {duration: 2, y: -200, ease: "myBounce-squash"});
