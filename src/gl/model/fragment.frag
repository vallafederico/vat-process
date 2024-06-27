uniform float u_time;
// uniform sampler2D u_t1; vec4 img = texture2D(u_t1, v_uv);

varying vec2 v_uv;
varying vec3 v_new_normal;


void main() {


  gl_FragColor = vec4(v_new_normal, 1.);
  
  // gl_FragColor = vec4(1., 0., 0., 1.);
}
