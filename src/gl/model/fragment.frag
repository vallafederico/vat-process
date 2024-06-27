uniform float u_time;
// uniform sampler2D u_t1; vec4 img = texture2D(u_t1, v_uv);

varying vec2 v_uv;
varying vec3 v_new_normal;


void main() {

// point light

  float light = dot(v_new_normal, vec3(1., .5, .3));
  vec3 final = vec3(light);


  gl_FragColor = vec4(v_new_normal, 1.);
  // gl_FragColor = vec4(vec3(final), 1.);
  
  
  // gl_FragColor = vec4(1., 0., 0., 1.);
}
