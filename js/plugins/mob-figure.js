/** https://gismo150.github.io/WebGL_Editor2-master/index.html **/
/** https://www.iquilezles.org/www/articles/intersectors/intersectors.html **/


'use strict';

let state = 0;

Math.TAU = Math.PI * 2;

Math.RAD = Math.PI / 180;

Math.DEG = 180 / Math.PI;

Math.PHI = 0.5 + 0.5 * Math.sqrt(5);

Math.random = (function(x) {
    return function() {
        x ^= x << 13;
        x ^= x >>> 17;
        x ^= x << 5;
        return 1 - (x >>> 0) / 0xFFFFFFFF;
    };
})(1);

window.addEventListener('load', function() {





    let renderScene = function(cns, nmb, scale) {
        var _, buffer, canvas, colors, context, data, j, k, l, model, mvp, palette, points, projection, render, v, view,
            x, y, z, zero, θ, ρ, φ;
        canvas = document.getElementById(cns);
        context = canvas.getContext('2d');
        // document.body.appendChild(canvas);
        buffer = mat4.create();
        model = mat4.create();
        view = mat4.create();
        projection = mat4.create();
        mvp = mat4.create();
        points = [];
        colors = [];
        palette = [[1.00, 1.00, 1.00, 0.30], [0.25, 0.50, 1.00, 0.75]].map(vec4.clone);




        /** BALL **/
        let renderBall = function(scale) {
            for (_ = j = 0; j < 15000; _ = ++j) {
                ρ = 3 / 5;
                θ = Math.acos(Math.random() * 2 - 1);
                φ = Math.random() * Math.PI * 2;
                x = ρ * Math.sin(θ) * Math.cos(φ);
                y = ρ * Math.sin(θ) * Math.sin(φ);
                z = ρ * Math.cos(θ);
                points.push(v = vec4.fromValues(x, y, z, scale));
                colors.push(palette[0]);
            }
        };

        /** CUBE **/

        let renderCube = function(scale) {
            for (_ = k = 0; k < 50000; _ = ++k) {
                x = (1 - Math.pow(Math.random(), 5)) * ((Math.random() * 2 << 1) - 1);
                y = (1 - Math.pow(Math.random(), 5)) * ((Math.random() * 2 << 1) - 1);
                z = (1 - Math.pow(Math.random(), 5)) * ((Math.random() * 2 << 1) - 1);


                points.push(v = vec4.fromValues(x, y, z, scale));
                colors.push(palette[1]);
            }
        };


        /** PIRAMIDE **/



        let renderPiramid = function(scale) {
            for (_ = k = 0; k < 50000; _ = ++k) {
                y = (1 - Math.pow(Math.random(), 5)) * ((Math.random() * 2 << 1) - 1);
                z = (1 - Math.pow(Math.random(), 5)) * ((Math.random() * 2 << 1) - 1);
                x = (1 - Math.pow(Math.random(), 5)) * ((Math.random() * 2 << 1) - 1);

                y = Math.abs(y)*2;
                x *= y*0.4;
                z *= y*0.4;
                y -= 1.5;

                points.push(v = vec4.fromValues(x, y, z, scale));
                colors.push(palette[1]);
            }
        };

        /** GEKSAGON **/

        let renderGeksagon = function(scale) {
            for (_ = k = 0; k < 50000; _ = ++k) {
                y = (1 - Math.pow(Math.random(), 5)) * ((Math.random() * 2 << 1) - 1);
                z = (1 - Math.pow(Math.random(), 5)) * ((Math.random() * 2 << 1) - 1);
                x = (1 - Math.pow(Math.random(), 5)) * ((Math.random() * 2 << 1) - 1);

                x *= (4.5-Math.abs(y)*2)/4;
                z *= 0.43;

                points.push(v = vec4.fromValues(x, y, z, scale));
                colors.push(palette[1]);
            }
        };

        switch(nmb) {
            case '1':
                renderBall(2.5);
                renderCube(scale);
                break;
            case '2':
                renderBall(2.5);
                renderPiramid(scale);
                break;
            case '3':
                renderBall(2.5);
                renderGeksagon(scale);
                break;
        }


        /** POINTS **/

        // for (_ = l = 0; l < 50000; _ = ++l) {
        //     x = Math.random() * 2 - 1;
        //     y = Math.random() * 2 - 1;
        //     z = Math.random() * 2 - 1;
        //     points.push(v = vec4.fromValues(x, y, z, 1));
        //     colors.push(palette[ρ < vec3.len(v) ? 1 : 0]);
        // }

        data = null;
        zero = null;
        return (render = function () {
            var H, T, W, a, b, g, i, len, m, n, point, r, ref, ref1, w;
            requestAnimationFrame(render);
            T = 1e-3 * Date.now();
            W = canvas.clientWidth;
            H = canvas.clientHeight;
            if (W !== canvas.width || H !== canvas.height) {
                canvas.width = W;
                canvas.height = H;
                data = context.createImageData(W, H);
                zero = context.createImageData(W, H);



                for (i = 0; i < zero.data.length; i += 4) {
                    zero.data[i] = 0x1A;   // r
                    zero.data[i+1] = 0x1D; // g
                    zero.data[i+2] = 0x3E; // b
                    zero.data[i+3] = 0xff;
                }


                data.data.set(zero.data);
            }
            mat4.identity(model);
            mat4.rotateX(model, model, T / 3);
            mat4.rotateY(model, model, T / 4);
            mat4.rotateZ(model, model, T / 5);
            mat4.lookAt(view, [0, 0, 5], [0, 0, 0], [0, 1, 0]);
            mat4.perspective(projection, 30 * Math.RAD, W / H, 1e-3, 1e3);
            [model, view, projection].reduce(function (a, b) {
                return mat4.mul(mvp, b, a);
            });
            for (i = n = 0, len = points.length; n < len; i = ++n) {
                point = points[i];
                vec4.transformMat4(buffer, point, mvp);
                vec3.scale(buffer, buffer, 1 / buffer[3]);
                x = buffer[0], y = buffer[1], z = buffer[2], w = buffer[3];
                if ((-1 < z && z < 1) && (-1 < y && y < 1) && (-1 < x && x < 1)) {
                    ref1 = colors[i], r = ref1[0], g = ref1[1], b = ref1[2], a = ref1[3];
                    x = (1 + x) * 0.5 * W | 0;
                    y = (1 - y) * 0.5 * H | 0;
                    i = x + y * W << 2;
                    a = a * H / w;


                    data.data[i++] += r * a;
                    data.data[i++] += g * a;
                    data.data[i++] += b * a;
                }
            }



            context.putImageData(data, 0, 0);

            return data.data.set(zero.data);

        })();

    };

    if($(window).width() <= 577) {
        renderScene('cube', '1', 1.9);
        renderScene('piramid', '2', 1.7);
        renderScene('geksa', '3', 1.8);
    }

    $(window).on('resize', function () {
        if($(window).width() <= 577 && state === 0) {
            renderScene('cube', '1', 1.9);
            renderScene('piramid', '2', 1.7);
            renderScene('geksa', '3', 1.8);
            state = 1;
        }
    })


});