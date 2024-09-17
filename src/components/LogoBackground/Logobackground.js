import './index.scss'
import { motion } from 'framer-motion'


const svgVariants = {
  hidden: {},
  visible:{
    rotate:0,
    transition:{duration:2}
  }
}

const pathVariants ={
  hidden: {
    opacity: 1,
    pathLength: 0
  },
  visible:{
    opacity:1,
    pathLength:1,
    transition:{
      duration:10,
      ease: "easeInOut"
    }
  }
}

const pathVariants2 ={
  hidden: {
    opacity: 1,
    pathLength: 0
  },
  visible:{
    opacity:1,
    pathLength:1,
    transition:{
      duration:5,
      ease: "easeInOut"
    }
  }
}
const LogoBackground = () => {
  return (
    <div className="logo-container" >
      
      <motion.svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="512.000000pt"
        height="512.000000pt"
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet"
        variants={svgVariants}
        initial = "hidden"
        animate = "visible"
      >
        <g
          className="svg-container"
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill="none"
        >
          <motion.path
            
            d="M1871 4159 c-607 -274 -1110 -504 -1118 -510 -10 -9 -13 -69 -13
            -289 0 -251 2 -278 18 -292 19 -17 463 -218 481 -218 6 0 205 88 442 195 236
            107 434 195 440 195 5 0 203 -88 439 -195 236 -107 435 -195 441 -195 24 0
            465 203 482 222 15 18 17 42 17 179 0 87 3 159 7 159 5 0 88 -36 185 -80 97
            -44 183 -80 191 -80 20 0 458 199 480 218 15 14 17 41 17 287 0 202 -3 275
            -12 287 -17 22 -1339 618 -1369 617 -13 0 -521 -225 -1128 -500z m1753 137
            c344 -155 628 -285 631 -287 2 -3 -81 -43 -185 -91 l-189 -86 -53 25 c-29 14
            -141 65 -248 113 -107 48 -281 127 -387 174 l-192 87 -228 -103 c-181 -82
            -228 -108 -228 -123 0 -18 23 -29 779 -371 l59 -26 -189 -85 -189 -86 -40 16
            c-22 9 -146 64 -275 122 -385 175 -563 255 -571 255 -4 0 -201 -88 -438 -195
            -238 -107 -437 -195 -444 -195 -7 0 -95 38 -197 85 l-184 84 44 19 c101 44
            2093 947 2096 951 0 1 283 -127 628 -283z m-644 -291 c0 -85 -3 -155 -7 -155
            -10 0 -353 153 -350 156 7 7 334 153 345 153 9 1 12 -36 12 -154z m470 -28
            l405 -183 3 -222 c1 -122 1 -222 -1 -222 -5 0 -330 146 -365 164 -29 15 -32
            21 -32 65 l0 48 -220 98 -220 98 0 169 c0 128 3 168 13 168 6 0 194 -83 417
            -183z m850 -230 l0 -223 -177 -79 c-97 -44 -185 -83 -195 -87 -17 -7 -18 4
            -18 215 l0 222 193 87 c105 48 193 87 195 87 1 1 2 -99 2 -222z m-2202 -199
            l-3 -223 -410 -187 c-225 -103 -413 -187 -418 -187 -4 -1 -6 99 -5 221 l3 222
            410 187 c226 103 413 187 418 188 4 1 6 -99 5 -221z m462 34 l415 -188 3 -222
            c1 -122 1 -222 -1 -222 -2 0 -190 85 -418 188 l-414 188 -3 222 c-1 122 -1
            222 1 222 1 0 189 -85 417 -188z m-1537 -102 l187 -84 0 -223 0 -222 -73 33
            c-40 18 -128 57 -195 87 l-122 54 0 223 c0 123 3 221 8 219 4 -2 91 -41 195
            -87z m2389 -352 c-8 -8 -378 -178 -388 -178 -2 0 -4 99 -4 221 l0 220 53 24
            c28 13 117 53 197 89 l145 65 3 -216 c1 -119 -1 -220 -6 -225z"
            
            variants={pathVariants}
          />
          <motion.path
            
            d="M4307 3257 c-15 -10 -17 -27 -15 -117 3 -102 4 -105 27 -108 34 -5
            41 12 41 115 0 70 -4 95 -16 107 -19 19 -16 19 -37 3z"
            variants={pathVariants2}
          />
          <motion.path
            d="M2112 3098 c-8 -8 -12 -54 -12 -140 0 -110 2 -130 16 -135 9 -3 24
            -2 33 4 13 8 17 33 19 133 3 121 -4 150 -32 150 -7 0 -17 -5 -24 -12z"
            variants={pathVariants2}
          />
          <motion.path
            d="M3863 3093 c-10 -3 -13 -60 -13 -234 0 -203 2 -230 16 -236 9 -3 24
            -2 33 4 14 9 16 40 19 222 3 241 -3 266 -55 244z"
            variants={pathVariants2}
          />
          <motion.path
            d="M4293 2874 c-15 -39 38 -67 60 -32 8 12 7 21 -2 32 -17 21 -50 20
            -58 0z"
            variants={pathVariants2}
          />
          <motion.path
            d="M771 2836 c-8 -9 -11 -64 -9 -171 3 -132 6 -159 19 -168 9 -6 24 -7
            33 -4 14 6 16 28 16 176 0 145 -2 170 -16 175 -23 9 -30 8 -43 -8z"
            variants={pathVariants2}
          />
          <motion.path
            d="M2115 2676 c-25 -18 -15 -50 16 -54 28 -3 43 16 33 42 -8 21 -30 26
            -49 12z"
            variants={pathVariants2}
          />
          <motion.path
            d="M1212 2668 c-14 -14 -17 -704 -3 -726 4 -8 19 -12 32 -10 l24 3 3
            359 c2 359 0 386 -32 386 -7 0 -17 -5 -24 -12z"
            variants={pathVariants2}
          />
          <motion.path
            d="M3863 2473 c-9 -3 -13 -30 -13 -84 0 -65 3 -81 16 -86 34 -13 49 11
            52 79 2 50 -1 70 -13 82 -17 17 -22 18 -42 9z"
            variants={pathVariants2}
          />
          <motion.path
            d="M776 2347 c-26 -19 -13 -57 20 -57 28 0 42 25 27 48 -13 22 -26 24
            -47 9z"
            variants={pathVariants2}
          />
          <motion.path
            d="M1204 1767 c-3 -8 -4 -45 -2 -83 l3 -69 30 0 30 0 0 80 c0 80 0 80
            -28 83 -16 2 -29 -2 -33 -11z"
            variants={pathVariants2}
          />
          <motion.path
            d="M1880 1234 c-602 -273 -1101 -501 -1108 -507 -7 -5 -12 -22 -10 -35
            3 -23 27 -37 231 -129 126 -57 236 -103 244 -103 9 0 100 38 202 84 102 46
            298 134 434 195 l248 112 432 -195 c238 -108 440 -196 449 -196 9 0 119 46
            245 103 204 92 228 106 231 129 2 13 -3 30 -11 36 -12 10 -98 50 -417 192
            -284 128 -366 166 -369 174 -1 5 70 42 159 82 l161 73 431 -195 c236 -107 439
            -194 450 -194 12 0 102 37 202 81 264 118 276 125 276 153 0 13 -6 28 -12 33
            -31 23 -1329 603 -1350 602 -13 0 -516 -223 -1118 -495z m1100 216 c14 -8 26
            -8 40 0 16 9 20 23 22 94 l3 84 584 -264 c321 -145 585 -265 587 -267 1 -1
            -74 -37 -167 -79 l-169 -77 -83 39 c-45 21 -243 110 -439 199 l-358 162 -237
            -108 -238 -108 0 -129 c0 -112 2 -130 18 -140 12 -8 22 -8 35 0 13 9 18 29 22
            92 l5 80 355 -160 c195 -88 359 -163 363 -167 8 -8 -298 -151 -321 -151 -6 0
            -107 43 -224 96 -117 52 -313 141 -436 196 l-223 100 -434 -196 c-238 -108
            -439 -196 -445 -196 -24 0 -331 143 -323 151 4 4 226 107 493 227 651 295
            1400 633 1480 669 l65 29 3 -83 c2 -70 6 -84 22 -93z"
            variants={pathVariants2}
          />
        </g>
      </motion.svg>
    </div>
  )
}

export default LogoBackground