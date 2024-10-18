<template>
  <div id="particles-js"></div>
  <div class="container">
    <div class="jumbo">
      <div class="jumbo-text p-5">
        <h1>Event<span class="corp">Eir</span></h1>
        <h3 class="py-4">Brining People Together, Enhanced By AI</h3>
        <p>Coming Soon - <span class="corp">{{ new Date().getFullYear() }}</span></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

// Declare particlesJS globally
declare global {
  interface Window {
    particlesJS: any
  }
}

useHead({
  title: 'EventEir',
  meta: [
    { name: 'description', content: 'EventEir is your personalized event AI companion' }
  ],
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js',
      type: 'text/javascript'
    }
  ]
})

// Use onMounted to initialize particles.js
onMounted(() => {
  // Ensure particlesJS is loaded
  const initializeParticles = () => {
    if (typeof window.particlesJS !== 'undefined') {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 40,
            density: { enable: true, value_area: 500 }
          },
          color: { value: '#5ce546' },
          shape: {
            type: 'polygon',
            polygon: { nb_sides: 5 }
          },
          opacity: {
            value: 0.5,
            anim: { enable: false }
          },
          size: {
            value: 3,
            random: true
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'grab' }
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } }
          }
        },
        retina_detect: true
      })
    } else {
      console.error('particlesJS is not available')
    }
  }

  // Initialize particles.js once it's loaded
  if (typeof window.particlesJS !== 'undefined') {
    initializeParticles()
  } else {
    const checkParticles = setInterval(() => {
      if (typeof window.particlesJS !== 'undefined') {
        clearInterval(checkParticles)
        initializeParticles()
      }
    }, 100)
  }
})
</script>

<style scoped>

.container {
  position: relative;
  z-index: 2;
  text-align: center;
  overflow: auto;
  pointer-events: none;
  margin: auto;
}

.jumbo {
  background-color: #151d1eb4;
  width: 50%;
  margin: 0 auto;
  border-radius: 25px;
  border-color: #5be54660;
  border-style: solid;
  border-width: 1px;
  margin-top: 30vh;
  pointer-events: all;
}

.jumbo .jumbo-text {
  color: #fff;
  font-size: 140%;
}

.corp {
  color: #5be546;
}

.rounded {
  width: 50%;
  color: #5be546;
}

/* particles */
canvas {
  display: block;
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0d1213;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  z-index: 1;
}
</style>