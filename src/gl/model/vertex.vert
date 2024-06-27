#define MPI 3.1415926535897932384626433832795

attribute vec2 uv1;

uniform float u_time;

varying vec2 v_uv;
varying vec2 v_uv1;
varying vec3 v_new_normal;

uniform float u_progress;

// vat params
uniform sampler2D u_offsets;
uniform sampler2D u_normals;
uniform float u_frames;

const float offset_scale = 1.;


void main() {
  vec3 pos = position;

  vec2 v_displacement_uv = vec2(uv1.x, 1. - (u_progress * u_frames / u_frames));
  vec3 offset = texture2D(u_offsets, v_displacement_uv).xzy;
  vec3 new_normal = texture2D(u_normals, v_displacement_uv).xyz;

  offset *= offset_scale;
  vec3 new_pos = pos + offset;


  gl_Position = projectionMatrix * modelViewMatrix * vec4(new_pos, 1.0);

  v_uv = uv;
  v_new_normal = new_normal;
}
