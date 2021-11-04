import { AnimationController, Animation } from '@ionic/angular';

export const enterAnimation = (baseEl: HTMLElement, opts?: any): Animation => {


    console.log('baseEl: ', baseEl);
    console.log('opts: ', opts);

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const AnimationCtrl = new AnimationController();

    if (opts.direction === 'foward'){

        return AnimationCtrl.create()
        .addElement(opts.enteringEl)
        .duration(1000)
        .easing('ease-in')
        .fromTo('opacity', 0, 1);
    }else{

        const rootAnimation = AnimationCtrl.create()
        .addElement(opts.enteringEl)
        .duration(1000)
        .easing('ease-in')
        .fromTo('opacity', 0, 1);

        const leavingAnimation = AnimationCtrl.create()
        .addElement(opts.leavingEl)
        .duration(1000)
        .easing('ease-out')
        .fromTo('opacity', 1, 0);

        return AnimationCtrl.create().addAnimation([rootAnimation,leavingAnimation]);
    }

};


