class Launcher{

    constructor(bodyA, pointB){

        var options={

            bodyA: bodyA,
            pointB: pointB,

            stiffness: 0.01,
            length: 12

        }

        this.launcher = Constraint.create(options)
        World.add(world, this.launcher)

        this.pointB = pointB

    }

    fly(){

        this.launcher.bodyA = null

    }

    attach(){

        launcherObject = new Launcher(stoneObj.body, {x: 235, y: 420})

    }


    display(){

        if(this.launcher.bodyA){

        var pointA = this.launcher.bodyA.position
        var pointB = this.pointB

        //line(pointA.x, pointA.y, pointB.x, pointB.y)

        }

    }

}