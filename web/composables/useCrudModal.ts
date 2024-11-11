import { toasts } from '~/composables/useToast';
import { checkAuth } from '~/utils/authHelpers';
import { getCapSingularName } from '~/utils/textHelpers';

export function useCrudModal(model: string, auth: boolean) {
    const capitalizedName = getCapSingularName(model);

    const showModal = ref(false);
    const modalTitle = ref(`Add ${model}`);
    const modalButtonText = ref('Create');
    const selectedModel = ref(null as any);

    const closeCrudModal = () => {
        showModal.value = false;
    };

    const openViewModal = (model: any) => {
        checkAuth()
            ? ((selectedModel.value = model),
              (modalTitle.value = `View ${capitalizedName}`),
              (modalButtonText.value = ''),
              (showModal.value = true))
            : toasts('You are not authorized to view.', { type: 'warning' });
    };

    const openCreateModal = () => {
        checkAuth()
            ? ((selectedModel.value = null),
              (modalTitle.value = `Add new ${capitalizedName}`),
              (showModal.value = true))
            : toasts('You are not authorized to create.', { type: 'warning' });
    };

    const openEditModal = (model: any) => {
        checkAuth()
            ? ((selectedModel.value = model),
              (modalTitle.value = `Edit ${capitalizedName}`),
              (modalButtonText.value = 'Update'),
              (showModal.value = true))
            : toasts('You are not authorized to edit.', { type: 'warning' });
    };

    const printModal = (model: any) => {
        checkAuth()
            ? ((selectedModel.value = model),
              (modalTitle.value = `Print ${capitalizedName}`),
              (modalButtonText.value = 'Print'),
              (showModal.value = true))
            : toasts('You are not authorized to print.', { type: 'warning' });
    };

    return {
        closeCrudModal,
        modalButtonText,
        modalTitle,
        openCreateModal,
        openEditModal,
        openViewModal,
        printModal,
        selectedModel,
        showModal,
    };
}
