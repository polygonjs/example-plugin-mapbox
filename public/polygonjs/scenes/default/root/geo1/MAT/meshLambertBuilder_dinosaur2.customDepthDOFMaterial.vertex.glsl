#include <common>



// /geo1/MAT/meshLambertBuilder_dinosaur2/fitFrom01ToVariance1
//
//
// FIT
//
//
float fit(float val, float srcMin, float srcMax, float destMin, float destMax){
	float src_range = srcMax - srcMin;
	float dest_range = destMax - destMin;

	float r = (val - srcMin) / src_range;
	return (r * dest_range) + destMin;
}
vec2 fit(vec2 val, vec2 srcMin, vec2 srcMax, vec2 destMin, vec2 destMax){
	return vec2(
		fit(val.x, srcMin.x, srcMax.x, destMin.x, destMax.x),
		fit(val.y, srcMin.y, srcMax.y, destMin.y, destMax.y)
	);
}
vec3 fit(vec3 val, vec3 srcMin, vec3 srcMax, vec3 destMin, vec3 destMax){
	return vec3(
		fit(val.x, srcMin.x, srcMax.x, destMin.x, destMax.x),
		fit(val.y, srcMin.y, srcMax.y, destMin.y, destMax.y),
		fit(val.z, srcMin.z, srcMax.z, destMin.z, destMax.z)
	);
}
vec4 fit(vec4 val, vec4 srcMin, vec4 srcMax, vec4 destMin, vec4 destMax){
	return vec4(
		fit(val.x, srcMin.x, srcMax.x, destMin.x, destMax.x),
		fit(val.y, srcMin.y, srcMax.y, destMin.y, destMax.y),
		fit(val.z, srcMin.z, srcMax.z, destMin.z, destMax.z),
		fit(val.w, srcMin.w, srcMax.w, destMin.w, destMax.w)
	);
}

//
//
// FIT TO 01
// fits the range [srcMin, srcMax] to [0, 1]
//
float fitTo01(float val, float srcMin, float srcMax){
	float size = srcMax - srcMin;
	return (val - srcMin) / size;
}
vec2 fitTo01(vec2 val, vec2 srcMin, vec2 srcMax){
	return vec2(
		fitTo01(val.x, srcMin.x, srcMax.x),
		fitTo01(val.y, srcMin.y, srcMax.y)
	);
}
vec3 fitTo01(vec3 val, vec3 srcMin, vec3 srcMax){
	return vec3(
		fitTo01(val.x, srcMin.x, srcMax.x),
		fitTo01(val.y, srcMin.y, srcMax.y),
		fitTo01(val.z, srcMin.z, srcMax.z)
	);
}
vec4 fitTo01(vec4 val, vec4 srcMin, vec4 srcMax){
	return vec4(
		fitTo01(val.x, srcMin.x, srcMax.x),
		fitTo01(val.y, srcMin.y, srcMax.y),
		fitTo01(val.z, srcMin.z, srcMax.z),
		fitTo01(val.w, srcMin.w, srcMax.w)
	);
}

//
//
// FIT FROM 01
// fits the range [0, 1] to [destMin, destMax]
//
float fitFrom01(float val, float destMin, float destMax){
	return fit(val, 0.0, 1.0, destMin, destMax);
}
vec2 fitFrom01(vec2 val, vec2 srcMin, vec2 srcMax){
	return vec2(
		fitFrom01(val.x, srcMin.x, srcMax.x),
		fitFrom01(val.y, srcMin.y, srcMax.y)
	);
}
vec3 fitFrom01(vec3 val, vec3 srcMin, vec3 srcMax){
	return vec3(
		fitFrom01(val.x, srcMin.x, srcMax.x),
		fitFrom01(val.y, srcMin.y, srcMax.y),
		fitFrom01(val.z, srcMin.z, srcMax.z)
	);
}
vec4 fitFrom01(vec4 val, vec4 srcMin, vec4 srcMax){
	return vec4(
		fitFrom01(val.x, srcMin.x, srcMax.x),
		fitFrom01(val.y, srcMin.y, srcMax.y),
		fitFrom01(val.z, srcMin.z, srcMax.z),
		fitFrom01(val.w, srcMin.w, srcMax.w)
	);
}

//
//
// FIT FROM 01 TO VARIANCE
// fits the range [0, 1] to [center - variance, center + variance]
//
float fitFrom01ToVariance(float val, float center, float variance){
	return fitFrom01(val, center - variance, center + variance);
}
vec2 fitFrom01ToVariance(vec2 val, vec2 center, vec2 variance){
	return vec2(
		fitFrom01ToVariance(val.x, center.x, variance.x),
		fitFrom01ToVariance(val.y, center.y, variance.y)
	);
}
vec3 fitFrom01ToVariance(vec3 val, vec3 center, vec3 variance){
	return vec3(
		fitFrom01ToVariance(val.x, center.x, variance.x),
		fitFrom01ToVariance(val.y, center.y, variance.y),
		fitFrom01ToVariance(val.z, center.z, variance.z)
	);
}
vec4 fitFrom01ToVariance(vec4 val, vec4 center, vec4 variance){
	return vec4(
		fitFrom01ToVariance(val.x, center.x, variance.x),
		fitFrom01ToVariance(val.y, center.y, variance.y),
		fitFrom01ToVariance(val.z, center.z, variance.z),
		fitFrom01ToVariance(val.w, center.w, variance.w)
	);
}

// /geo1/MAT/meshLambertBuilder_dinosaur2/instanceTransform1


// https://stackoverflow.com/questions/23793698/how-to-implement-slerp-in-glsl-hlsl
// vec4 quatSlerp(vec4 p0, vec4 p1, float t)
// {
// 	float dotp = dot(normalize(p0), normalize(p1));
// 	if ((dotp > 0.9999) || (dotp < -0.9999))
// 	{
// 		if (t<=0.5)
// 			return p0;
// 		return p1;
// 	}
// 	float theta = acos(dotp);
// 	vec4 P = ((p0*sin((1.0-t)*theta) + p1*sin(t*theta)) / sin(theta));
// 	P.w = 1.0;
// 	return P;
// }

// https://devcry.heiho.net/html/2017/20170521-slerp.html
// float lerp(float a, float b, float t) {
// 	return (1.0 - t) * a + t * b;
// }
// vec4 quatSlerp(vec4 p0, vec4 p1, float t){
// 	vec4 qb = p1;

// 	// cos(a) = dot product
// 	float cos_a = p0.x * qb.x + p0.y * qb.y + p0.z * qb.z + p0.w * qb.w;
// 	if (cos_a < 0.0f) {
// 		cos_a = -cos_a;
// 		qb = -qb;
// 	}

// 	// close to zero, cos(a) ~= 1
// 	// do linear interpolation
// 	if (cos_a > 0.999) {
// 		return vec4(
// 			lerp(p0.x, qb.x, t),
// 			lerp(p0.y, qb.y, t),
// 			lerp(p0.z, qb.z, t),
// 			lerp(p0.w, qb.w, t)
// 		);
// 	}

// 	float alpha = acos(cos_a);
// 	return (p0 * sin(1.0 - t) + p1 * sin(t * alpha)) / sin(alpha);
// }

// https://stackoverflow.com/questions/62943083/interpolate-between-two-quaternions-the-long-way
vec4 quatSlerp(vec4 q1, vec4 q2, float t){
	float angle = acos(dot(q1, q2));
	float denom = sin(angle);
	//check if denom is zero
	return (q1*sin((1.0-t)*angle)+q2*sin(t*angle))/denom;
}
// TO CHECK:
// this page https://www.reddit.com/r/opengl/comments/704la7/glsl_quaternion_library/
// has a link to a potentially nice pdf:
// http://web.mit.edu/2.998/www/QuaternionReport1.pdf

// https://github.com/mattatz/ShibuyaCrowd/blob/master/source/shaders/common/quaternion.glsl
vec4 quatMult(vec4 q1, vec4 q2)
{
	return vec4(
	q1.w * q2.x + q1.x * q2.w + q1.z * q2.y - q1.y * q2.z,
	q1.w * q2.y + q1.y * q2.w + q1.x * q2.z - q1.z * q2.x,
	q1.w * q2.z + q1.z * q2.w + q1.y * q2.x - q1.x * q2.y,
	q1.w * q2.w - q1.x * q2.x - q1.y * q2.y - q1.z * q2.z
	);
}
// http://glmatrix.net/docs/quat.js.html#line97
//   let ax = a[0], ay = a[1], az = a[2], aw = a[3];

//   let bx = b[0], by = b[1], bz = b[2], bw = b[3];

//   out[0] = ax * bw + aw * bx + ay * bz - az * by;

//   out[1] = ay * bw + aw * by + az * bx - ax * bz;

//   out[2] = az * bw + aw * bz + ax * by - ay * bx;

//   out[3] = aw * bw - ax * bx - ay * by - az * bz;

//   return out



// http://www.neilmendoza.com/glsl-rotation-about-an-arbitrary-axis/
mat4 rotationMatrix(vec3 axis, float angle)
{
	axis = normalize(axis);
	float s = sin(angle);
	float c = cos(angle);
	float oc = 1.0 - c;

 	return mat4(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s, 0.0, oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c, oc * axis.y * axis.z - axis.x * s,  0.0, oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c, 0.0, 0.0, 0.0, 0.0, 1.0);
}

// https://www.geeks3d.com/20141201/how-to-rotate-a-vertex-by-a-quaternion-in-glsl/
vec4 quatFromAxisAngle(vec3 axis, float angle)
{
	vec4 qr;
	float half_angle = (angle * 0.5); // * 3.14159 / 180.0;
	float sin_half_angle = sin(half_angle);
	qr.x = axis.x * sin_half_angle;
	qr.y = axis.y * sin_half_angle;
	qr.z = axis.z * sin_half_angle;
	qr.w = cos(half_angle);
	return qr;
}
vec3 rotateWithAxisAngle(vec3 position, vec3 axis, float angle)
{
	vec4 q = quatFromAxisAngle(axis, angle);
	vec3 v = position.xyz;
	return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}
// vec3 applyQuaternionToVector( vec4 q, vec3 v ){
// 	return v + 2.0 * cross( q.xyz, cross( q.xyz, v ) + q.w * v );
// }
vec3 rotateWithQuat( vec3 v, vec4 q )
{
	// vec4 qv = multQuat( quat, vec4(vec, 0.0) );
	// return multQuat( qv, vec4(-quat.x, -quat.y, -quat.z, quat.w) ).xyz;
	return v + 2.0 * cross( q.xyz, cross( q.xyz, v ) + q.w * v );
}
// https://github.com/glslify/glsl-look-at/blob/gh-pages/index.glsl
// mat3 rotation_matrix(vec3 origin, vec3 target, float roll) {
// 	vec3 rr = vec3(sin(roll), cos(roll), 0.0);
// 	vec3 ww = normalize(target - origin);
// 	vec3 uu = normalize(cross(ww, rr));
// 	vec3 vv = normalize(cross(uu, ww));

// 	return mat3(uu, vv, ww);
// }
// mat3 rotation_matrix(vec3 target, float roll) {
// 	vec3 rr = vec3(sin(roll), cos(roll), 0.0);
// 	vec3 ww = normalize(target);
// 	vec3 uu = normalize(cross(ww, rr));
// 	vec3 vv = normalize(cross(uu, ww));

// 	return mat3(uu, vv, ww);
// }

float vectorAngle(vec3 start, vec3 dest){
	start = normalize(start);
	dest = normalize(dest);

	float cosTheta = dot(start, dest);
	vec3 c1 = cross(start, dest);
	// We use the dot product of the cross with the Y axis.
	// This is a little arbitrary, but can still give a good sense of direction
	vec3 y_axis = vec3(0.0, 1.0, 0.0);
	float d1 = dot(c1, y_axis);
	float angle = acos(cosTheta) * sign(d1);
	return angle;
}

// http://www.opengl-tutorial.org/intermediate-tutorials/tutorial-17-quaternions/#i-need-an-equivalent-of-glulookat-how-do-i-orient-an-object-towards-a-point-
vec4 vectorAlign(vec3 start, vec3 dest){
	start = normalize(start);
	dest = normalize(dest);

	float cosTheta = dot(start, dest);
	vec3 axis;

	// if (cosTheta < -1 + 0.001f){
	// 	// special case when vectors in opposite directions:
	// 	// there is no ideal rotation axis
	// 	// So guess one; any will do as long as it's perpendicular to start
	// 	axis = cross(vec3(0.0f, 0.0f, 1.0f), start);
	// 	if (length2(axis) < 0.01 ) // bad luck, they were parallel, try again!
	// 		axis = cross(vec3(1.0f, 0.0f, 0.0f), start);

	// 	axis = normalize(axis);
	// 	return gtx::quaternion::angleAxis(glm::radians(180.0f), axis);
	// }
	if(cosTheta > (1.0 - 0.0001) || cosTheta < (-1.0 + 0.0001) ){
		axis = normalize(cross(start, vec3(0.0, 1.0, 0.0)));
		if (length(axis) < 0.001 ){ // bad luck, they were parallel, try again!
			axis = normalize(cross(start, vec3(1.0, 0.0, 0.0)));
		}
	} else {
		axis = normalize(cross(start, dest));
	}

	float angle = acos(cosTheta);

	return quatFromAxisAngle(axis, angle);
}
vec4 vectorAlignWithUp(vec3 start, vec3 dest, vec3 up){
	vec4 rot1 = vectorAlign(start, dest);
	up = normalize(up);

	// Recompute desiredUp so that it's perpendicular to the direction
	// You can skip that part if you really want to force desiredUp
	// vec3 right = normalize(cross(dest, up));
	// up = normalize(cross(right, dest));

	// Because of the 1rst rotation, the up is probably completely screwed up.
	// Find the rotation between the up of the rotated object, and the desired up
	vec3 newUp = rotateWithQuat(vec3(0.0, 1.0, 0.0), rot1);//rot1 * vec3(0.0, 1.0, 0.0);
	vec4 rot2 = vectorAlign(up, newUp);

	// return rot1;
	return rot2;
	// return multQuat(rot1, rot2);
	// return rot2 * rot1;

}

// https://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm
float quatToAngle(vec4 q){
	return 2.0 * acos(q.w);
}
vec3 quatToAxis(vec4 q){
	return vec3(
		q.x / sqrt(1.0-q.w*q.w),
		q.y / sqrt(1.0-q.w*q.w),
		q.z / sqrt(1.0-q.w*q.w)
	);
}

vec4 align(vec3 dir, vec3 up){
	vec3 start_dir = vec3(0.0, 0.0, 1.0);
	vec3 start_up = vec3(0.0, 1.0, 0.0);
	vec4 rot1 = vectorAlign(start_dir, dir);
	up = normalize(up);

	// Recompute desiredUp so that it's perpendicular to the direction
	// You can skip that part if you really want to force desiredUp
	vec3 right = normalize(cross(dir, up));
	if(length(right)<0.001){
		right = vec3(1.0, 0.0, 0.0);
	}
	up = normalize(cross(right, dir));

	// Because of the 1rst rotation, the up is probably completely screwed up.
	// Find the rotation between the up of the rotated object, and the desired up
	vec3 newUp = rotateWithQuat(start_up, rot1);//rot1 * vec3(0.0, 1.0, 0.0);
	vec4 rot2 = vectorAlign(normalize(newUp), up);

	// return rot1;
	return quatMult(rot1, rot2);
	// return rot2 * rot1;

}







// /geo1/MAT/meshLambertBuilder_dinosaur2/globals2
uniform float time;

// /geo1/MAT/meshLambertBuilder_dinosaur2/globals1
varying vec2 v_POLY_globals1_uv;

// /geo1/MAT/meshLambertBuilder_dinosaur2/attribute2
varying vec3 v_POLY_attribute_restP;

// /geo1/MAT/meshLambertBuilder_dinosaur2/attribute3
varying float v_POLY_attribute_dist;

// /geo1/MAT/meshLambertBuilder_dinosaur2/attribute4
varying float v_POLY_attribute_id;

// /geo1/MAT/meshLambertBuilder_dinosaur2/attribute1
attribute float id;

// /geo1/MAT/meshLambertBuilder_dinosaur2/attribute2
attribute vec3 restP;

// /geo1/MAT/meshLambertBuilder_dinosaur2/attribute3
attribute float dist;

// /geo1/MAT/meshLambertBuilder_dinosaur2/instanceTransform1
attribute vec3 instancePosition;
attribute vec4 instanceOrientation;




#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
// removed:
//		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
// removed:
//	#include <begin_vertex>



	// /geo1/MAT/meshLambertBuilder_dinosaur2/attribute1
	float v_POLY_attribute1_val = id;
	
	// /geo1/MAT/meshLambertBuilder_dinosaur2/globals1
	v_POLY_globals1_uv = vec2(uv);
	
	// /geo1/MAT/meshLambertBuilder_dinosaur2/attribute2
	v_POLY_attribute_restP = vec3(restP);
	
	// /geo1/MAT/meshLambertBuilder_dinosaur2/attribute3
	v_POLY_attribute_dist = float(dist);
	
	// /geo1/MAT/meshLambertBuilder_dinosaur2/attribute4
	v_POLY_attribute_id = float(id);
	
	// /geo1/MAT/meshLambertBuilder_dinosaur2/globals2
	float v_POLY_globals2_time = time;
	
	// /geo1/MAT/meshLambertBuilder_dinosaur2/round1
	float v_POLY_round1_val = sign(v_POLY_attribute1_val)*floor(abs(v_POLY_attribute1_val)+0.5);
	
	// /geo1/MAT/meshLambertBuilder_dinosaur2/floatToVec2_1
	vec2 v_POLY_floatToVec2_1_vec2 = vec2(v_POLY_round1_val, 56.0);
	
	// /geo1/MAT/meshLambertBuilder_dinosaur2/random1
	float v_POLY_random1_rand = rand(v_POLY_floatToVec2_1_vec2);
	
	// /geo1/MAT/meshLambertBuilder_dinosaur2/fitFrom01ToVariance1
	float v_POLY_fitFrom01ToVariance1_val = fitFrom01ToVariance(v_POLY_random1_rand, 1.0, 0.34);
	
	// /geo1/MAT/meshLambertBuilder_dinosaur2/floatToVec3_1
	vec3 v_POLY_floatToVec3_1_vec3 = vec3(v_POLY_fitFrom01ToVariance1_val, v_POLY_fitFrom01ToVariance1_val, v_POLY_fitFrom01ToVariance1_val);
	
	// /geo1/MAT/meshLambertBuilder_dinosaur2/instanceTransform1
	vec3 v_POLY_instanceTransform1_position = vec3(position);
	v_POLY_instanceTransform1_position *= v_POLY_floatToVec3_1_vec3;
	v_POLY_instanceTransform1_position = rotateWithQuat( v_POLY_instanceTransform1_position, instanceOrientation );
	v_POLY_instanceTransform1_position += instancePosition;
	vec3 v_POLY_instanceTransform1_normal = vec3(normal);
	v_POLY_instanceTransform1_normal = rotateWithQuat( v_POLY_instanceTransform1_normal, instanceOrientation );
	
	// /geo1/MAT/meshLambertBuilder_dinosaur2/output1
	vec3 transformed = v_POLY_instanceTransform1_position;
	vec3 objectNormal = v_POLY_instanceTransform1_normal;
	#ifdef USE_TANGENT
		vec3 objectTangent = vec3( tangent.xyz );
	#endif



	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}