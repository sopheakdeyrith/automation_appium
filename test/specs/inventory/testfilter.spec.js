describe("Test filter Supplier, Categories,Location", ()=>{
    it("Test filter Supplier, Categories,Location",async()=>{
        await driver.execute("mobile: activateApp", {
            appId: "com.nham24.freshinvantory.dev",
          });
        await $('//android.view.ViewGroup[@content-desc="Inventory"]').click();
        await $('//android.widget.TextView[@text="Supplier"]').click();
        await $('//android.view.ViewGroup[@content-desc="Annam (Cambodia) Company Limited"]').click();
        await driver.pause(2000); 
        await driver.performActions([
            {
              type: "pointer",
              id: "finger1",
              parameters: { pointerType: "touch" },
              actions: [
                { type: "pointerMove", duration: 0, x: 990, y: 437 },
                { type: "pointerDown", button: 0 },
                { type: "pointerMove", duration: 200, x: 500, y: 437 },
                { type: "pointerMove", duration: 200, x: 100, y: 437 },
                { type: "pointerUp", button: 0 },
              ],
            },
          ]);
          await $('//android.widget.TextView[@text="Location"]').click();
          await $('//android.widget.TextView[@text="S-A-1-SHF1"]').click();
          await driver.pause(3000);
          await $('//android.widget.TextView[@text="Clear All"]').click();

    })
})