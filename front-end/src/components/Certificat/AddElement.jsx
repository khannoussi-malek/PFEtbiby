const AddElement = {
  // @Required
  // plugin name
  name: "Element",

  // @Required
  // data display
  display: "submenu",

  // @Required
  // add function - It is called only once when the plugin is first run.
  // This function generates HTML to append and register the event.
  // arguments - (core : core object, targetElement : clicked button element)
  add: function (core, targetElement) {
    // Generate submenu HTML
    // Always bind "core" when calling a plugin function
    let listDiv = this.setSubmenu.call(core);

    // You must bind "core" object when registering an event.
    /** add event listeners */
    var self = this;
    listDiv.querySelectorAll(".se-btn-list").forEach(function (btn) {
      btn.addEventListener("click", self.onClick.bind(core));
    });

    // @Required
    // You must add the "submenu" element using the "core.initMenuTarget" method.
    /** append target button menu */
    core.initMenuTarget(this.name, targetElement, listDiv);
  },

  setSubmenu: function () {
    const listDiv = this.util.createElement("DIV");
    listDiv.className = "se-submenu se-list-layer";
    listDiv.innerHTML = `<div class="se-list-inner se-list-font-size">
                            <ul class="se-list-basic">
                                <li>
                                    <button type="button" class="se-btn-list" value="{patientNomPrenom}">
                                      Nom et prenom du patient
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="se-btn-list" value="{sexesPatient}">
                                      Mr or MMr Patient
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="se-btn-list" value="{agePatient}">
                                    Âge du patient
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="se-btn-list" value="{datePatient}">
                                    date de naissance patient
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="se-btn-list" value="{addresPatient}">
                                    Address patient
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="se-btn-list" value="{sexesmedecin}">
                                      Mr or MMr medecin
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="se-btn-list" value="{medecinNomPrenom}">
                                    Nom et prenom du medecin
                                    </button>
                                </li>
                              
                                <li>
                                    <button type="button" class="se-btn-list" value="{thisDate}">
                                    date de cette journée
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="se-btn-list" value="{specialiteMedecin}">
                                    specialite medecin
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="se-btn-list" value="{domaineMedecin}">
                                    domain medecin
                                    </button>
                                </li>
                            </ul>
                        </div>`;

    return listDiv;
  },
  onClick: function (e) {
    const value = e.target.value;
    const node = this.util.createElement("span");
    this.util.addClass(node, "se-custom-tag");
    node.textContent = value;
    this.insertNode(node);
    const zeroWidthSpace = this.util.createTextNode(this.util.zeroWidthSpace);
    node.parentNode.insertBefore(zeroWidthSpace, node.nextSibling);
    this.submenuOff();
  },
};

export default AddElement;
